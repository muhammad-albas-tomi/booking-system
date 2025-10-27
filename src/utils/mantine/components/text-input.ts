import {
  createTheme,
  NumberInput,
  PasswordInput,
  PinInput,
  Select,
  Textarea,
  TextInput,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';

import classes from '~/styles/components/text-input.module.css';

export const themeTextInput = createTheme({
  components: {
    TextInput: TextInput.extend({
      defaultProps: {
        radius: '6px',
        classNames: classes,
      },
    }),
    PasswordInput: PasswordInput.extend({
      defaultProps: {
        radius: '6px',
        classNames: classes,
        height: '40px',
      },
    }),
    NumberInput: NumberInput.extend({
      defaultProps: {
        radius: '6px',
        classNames: classes,
        height: '40px',
      },
    }),
    Textarea: Textarea.extend({
      defaultProps: {
        radius: '6px',
        classNames: classes,
      },
    }),
    Select: Select.extend({
      defaultProps: {
        radius: '6px',
        classNames: classes,
      },
    }),
    PinInput: PinInput.extend({
      defaultProps: {
        h: '40px',
        // classNames: classes,
      },
    }),

    DateInput: DateInput.extend({
      defaultProps: {
        size: 'md',
        classNames: classes,
      },
      styles: {
        input: {
          outline: 'none',
        },
      },
    }),
  },
});
