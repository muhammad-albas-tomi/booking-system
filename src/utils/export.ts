import { Workbook } from 'exceljs';
import jsPDF from 'jspdf';
import autoTable, { __createTable, Table } from 'jspdf-autotable';
import { moment } from '~/utils/moment';

export class Export {
  private doc: jsPDF;
  private wb: Workbook;

  private title: string;
  private subtitle: string;

  private hasAction: boolean;

  private table?: Table;
  private head: string[][];
  private body: string[][];

  constructor(options?: {
    hasAction?: boolean;
    title?: string;
    subtitle?: string;
  }) {
    this.wb = new Workbook();

    this.doc = new jsPDF({
      orientation: 'l',
    });

    this.hasAction = options?.hasAction ?? true;

    this.title = options?.title || 'Dokumen';
    this.subtitle = options?.subtitle || '';

    this.head = [];
    this.body = [];
  }

  public injectFromHtml(html: HTMLTableElement | string = 'table#data-table') {
    let actionIndex = 0;

    const table = __createTable(this.doc, {
      html,
      didParseCell: (data) => {
        if (this.hasAction) {
          if (data.row.index === 0 && data.column.index === 0) {
            actionIndex = Object.keys(data.row.cells).length - 1;
          }

          if (data.column.index === actionIndex) {
            data.cell.text = [];
          }
        }
      },
    });

    this.table = table;

    this.parseHead();
    this.parseBody();
  }

  private parseHead() {
    const head = this.table?.head.map((row) => {
      return Object.values(row.cells).map((cell) => cell.text.join(''));
    });

    this.head = head || [];
  }

  private parseBody() {
    const body = this.table?.body.map((row) => {
      return Object.values(row.cells).map((cell) => cell.text.join(''));
    });

    this.body = body || [];
  }

  public fromHTML(src: string | HTMLElement) {
    this.doc.html(src);
  }

  public setHead(head: string[][] = []) {
    this.head = head || [];
  }

  public setBody(body: string[][] = []) {
    this.body = body;
  }

  public save(
    fileType: 'excel' | 'pdf' | 'element',
    fileName: string = [this.title, this.subtitle, moment()].join(),
  ) {
    if (fileType === 'excel') {
      const worksheet = this.wb.addWorksheet();

      this.head.forEach((row) => {
        worksheet.addRow(row);
      });

      this.body.forEach((row) => {
        worksheet.addRow(row);
      });

      this.wb.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8',
        });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName + '.xlsx';
        link.click();

        URL.revokeObjectURL(link.href);
      });
    } else if (fileType === 'pdf') {
      autoTable(this.doc, {
        head: this.head,
        body: this.body,
        headStyles: {
          fillColor: '#fc530a',
          textColor: '#fff',
          fontStyle: 'bold',
        },
      });

      this.doc.save(fileName + '.pdf');
    } else {
      this.doc.save(fileName + '.pdf');
    }
  }
}
