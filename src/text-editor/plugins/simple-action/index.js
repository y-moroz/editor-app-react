import SimpleAction from './SimpleAction';
import {
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft, FaAlignRight,
  FaBold,
  FaIndent,
  FaItalic,
  FaOutdent, FaRemoveFormat,
  FaStrikethrough,
  FaUnderline
} from 'react-icons/fa';
import {
  Bold, Indent,
  Italic,
  JustifyCenter,
  JustifyFull,
  JustifyLeft, JustifyRight, Outdent, RemoveFormat,
  StrikeThrough,
  Underline
} from '../../constants/editor-commands';

const ALIGN_ACTIONS_GROUP_ID = 1;
const INDENT_ACTIONS_GROUP_ID = 2;
const GENERAL_ACTIONS_GROUP_ID = 3;

const BOLD_ACTION = {
  component: SimpleAction,
  props: {
    command: Bold,
    icon: FaBold
  }
};

const ITALIC_ACTION = {
  component: SimpleAction,
  props: {
    command: Italic,
    icon: FaItalic
  }
};

const UNDERLINE_ACTION = {
  component: SimpleAction,
  props: {
    command: Underline,
    icon: FaUnderline
  }
};

const STRIKE_THROUGH_ACTION = {
  component: SimpleAction,
  props: {
    command: StrikeThrough,
    icon: FaStrikethrough
  }
};

const ALIGN_JUSTIFY_ACTION = {
  groupId: ALIGN_ACTIONS_GROUP_ID,
  component: SimpleAction,
  props: {
    command: JustifyFull,
    icon: FaAlignJustify
  }
};

const ALIGN_LEFT_ACTION = {
  groupId: ALIGN_ACTIONS_GROUP_ID,
  component: SimpleAction,
  props: {
    command: JustifyLeft,
    icon: FaAlignLeft
  }
};

const ALIGN_CENTER_ACTION = {
  groupId: ALIGN_ACTIONS_GROUP_ID,
  component: SimpleAction,
  props: {
    command: JustifyCenter,
    icon: FaAlignCenter
  }
};

const ALIGN_RIGHT_ACTION = {
  groupId: ALIGN_ACTIONS_GROUP_ID,
  component: SimpleAction,
  props: {
    command: JustifyRight,
    icon: FaAlignRight
  }
};

const INDENT_INCREASE_ACTION = {
  groupId: INDENT_ACTIONS_GROUP_ID,
  component: SimpleAction,
  props: {
    command: Indent,
    icon: FaIndent
  }
};

const INDENT_DECREASE_ACTION = {
  groupId: INDENT_ACTIONS_GROUP_ID,
  component: SimpleAction,
  props: {
    command: Outdent,
    icon: FaOutdent
  }
};

const CLEAR_FORMAT_ACTION = {
  groupId: GENERAL_ACTIONS_GROUP_ID,
  component: SimpleAction,
  props: {
    command: RemoveFormat,
    icon: FaRemoveFormat
  }
};

export const SIMPLE_ACTION_PLUGIN_CONFIG = [
  BOLD_ACTION,
  ITALIC_ACTION,
  UNDERLINE_ACTION,
  STRIKE_THROUGH_ACTION,

  ALIGN_JUSTIFY_ACTION,
  ALIGN_LEFT_ACTION,
  ALIGN_RIGHT_ACTION,
  ALIGN_CENTER_ACTION,

  INDENT_INCREASE_ACTION,
  INDENT_DECREASE_ACTION,

  CLEAR_FORMAT_ACTION
];
