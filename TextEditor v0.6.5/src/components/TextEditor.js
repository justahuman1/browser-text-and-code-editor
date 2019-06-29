// import React, { Component, Fragment } from 'react';
// import { Editor } from 'slate-react';
// import { Value } from 'slate';

// import Icon from 'react-icons-kit';
// import { bold } from 'react-icons-kit/feather/bold';
// import { italic } from 'react-icons-kit/feather/italic';
// import { code } from 'react-icons-kit/feather/code';
// import { list } from 'react-icons-kit/feather/list';
// import { underline } from 'react-icons-kit/feather/underline';

// import { BoldMark, ItalicMark, FormatToolbar } from './index';

// // Create our initial value...
// const initialValue = Value.fromJSON({
// 	document: {
// 		nodes: [
// 			{
// 				object: 'block',
// 				type: 'paragraph',
// 				nodes: [
// 					{
// 						object: 'text',
// 						leaves: [
// 							{
// 								text: '',
// 							},
// 						],
// 					},
// 				],
// 			},
// 		],
// 	},
// });

// export default class TextEditor extends Component {
// 	state = {
// 		value: initialValue,
// 	};

// 	// On change, update the app's React state with the new editor value.
// 	onChange = ({ value }) => {
// 		this.setState({ value });
// 	};

// 	onKeyDown = (e, change) => {
// 		/*
// 			we want all our commands to start with the user pressing ctrl,
// 			if they don't--we cancel the action.
// 		*/

// 		if (!e.ctrlKey) {
// 			return;
// 		}

// 		e.preventDefault();

// 		switch (e.key) {
// 			case 'b': {
// 				change.toggleMark('bold');
// 				return true;
// 			}
// 			case 'i': {
// 				change.toggleMark('italic');
// 				return true;
// 			}

// 			case 'e': {
// 				change.toggleMark('code');
// 				return true;
// 			}

// 			case 'l': {
// 				change.toggleMark('list');
// 				return true;
// 			}

// 			case 'u': {
// 				change.toggleMark('underline');
// 				return true;
// 			}
// 			default: {
// 				return;
// 			}
// 		}
// 	};

// 	renderMark = (props) => {
// 		switch (props.mark.type) {
// 			case 'bold':
// 				return <BoldMark {...props} />;

// 			case 'italic':
// 				return <ItalicMark {...props} />;

// 			case 'code':
// 				return <code {...props.attributes}>{props.children}</code>;

// 			case 'list':
// 				return (
// 					<ul {...props.attributes}>
// 						<li>{props.children}</li>
// 					</ul>
// 				);

// 			case 'underline':
// 				return <u {...props.attributes}>{props.children}</u>;

// 			default: {
// 				return;
// 			}
// 		}
// 	};
// 	ref = editor => {
//         this.editor = editor
// 	};

// 	onMarkClick = (e, type) => {
// 		e.preventDefault();
// 		this.editor.toggleMark(type);
// 	};

// 	render() {
// 		return (
// 			<Fragment>
// 				<FormatToolbar>
// 					<button
// 						onPointerDown={(e) => this.onMarkClick(e, 'bold')}
// 						// className="tooltip-icon-button"
// 					>
// 						<Icon icon={bold} />
// 					</button>
// 					<button
// 						onPointerDown={(e) => this.onMarkClick(e, 'italic')}
// 						className="tooltip-icon-button"
// 					>
// 						<Icon icon={italic} />
// 					</button>
// 					<button
// 						onPointerDown={(e) => this.onMarkClick(e, 'code')}
// 						className="tooltip-icon-button"
// 					>
// 						<Icon icon={code} />
// 					</button>
// 					<button
// 						onPointerDown={(e) => this.onMarkClick(e, 'list')}
// 						className="tooltip-icon-button"
// 					>
// 						<Icon icon={list} />
// 					</button>
// 					<button
// 						onPointerDown={(e) => this.onMarkClick(e, 'underline')}
// 						className="tooltip-icon-button"
// 					>
// 						<Icon icon={underline} />
// 					</button>
// 				</FormatToolbar>
// 				<Editor
// 					value={this.state.value}
// 					ref={this.ref}
// 					onChange={this.onChange}
// 					onKeyDown={this.onKeyDown}
// 					renderMark={this.renderMark}
// 					toggleMark={this.booty}
// 				/>
// 			</Fragment>
// 		);
// 	}
// }



import { Editor } from 'slate-react'
import { Value } from 'slate'
import React from 'react'
import initialValue from './sl/value'
import { isKeyHotkey } from 'is-hotkey'
import { Button, Toolbar , Icon} from './sl/Headbar'

// import Icon from '@material-ui/core/Icon'


const DEFAULT_NODE = 'paragraph';
const isBoldHotkey = isKeyHotkey('mod+b');
const isItalicHotkey = isKeyHotkey('mod+i');
const isUnderlinedHotkey = isKeyHotkey('mod+u');
const isCodeHotkey = isKeyHotkey('mod+`');


class TextEditor extends React.Component {

  state = {
    value: Value.fromJSON(initialValue)
  }

  hasMark = type => {
    const { value } = this.state
    return value.activeMarks.some(mark => mark.type === type)
  }

  hasBlock = type => {
    const { value } = this.state
    return value.blocks.some(node => node.type === type)
  }

  ref = editor => {
    this.editor = editor
  }

  render() {
    return (
      <div>
        <Toolbar>
          {this.renderMarkButton('bold', 'ic_format_bold')}
          {this.renderMarkButton('italic', 'format-italic')}
          {this.renderMarkButton('underlined', 'format_underlined')}
          {this.renderMarkButton('code', 'code')}
          {this.renderBlockButton('heading-one', 'looks_one')}
          {this.renderBlockButton('heading-two', 'looks_two')}
          {this.renderBlockButton('block-quote', 'format_quote')}
          {this.renderBlockButton('numbered-list', 'format_list_numbered')}
          {this.renderBlockButton('bulleted-list', 'format_list_bulleted')}
        </Toolbar>
        <Editor
          spellCheck
          autoFocus
          placeholder="Enter Text Here..."
          ref={this.ref}
          value={this.state.value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          renderBlock={this.renderBlock}
          renderMark={this.renderMark}
        />
      </div>
    )
  }

  renderMarkButton = (type, icon) => {
    const isActive = this.hasMark(type)

    return (
      <Button
        active={isActive}
        onMouseDown={event => this.onClickMark(event, type)}
      >
        <Icon>{icon}</Icon>
      </Button>
    )
  }

  renderBlockButton = (type, icon) => {
    let isActive = this.hasBlock(type)
	console.log(icon)
    if (['numbered-list', 'bulleted-list'].includes(type)) {
      const { value: { document, blocks } } = this.state

      if (blocks.size > 0) {
        const parent = document.getParent(blocks.first().key)
        isActive = this.hasBlock('list-item') && parent && parent.type === type
      }
    }

    return (
      <Button
        active={isActive}
        onMouseDown={event => this.onClickBlock(event, type)}
      >
        <Icon>{icon}</Icon>
      </Button>
    )
  }


  renderBlock = (props, editor, next) => {
    const { attributes, children, node } = props

    switch (node.type) {
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>
      case 'list-item':
        return <li {...attributes}>{children}</li>
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>
      default:
        return next()
    }
  }


  renderMark = (props, editor, next) => {
    const { children, mark, attributes } = props

    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{children}</strong>
      case 'code':
        return <code {...attributes}>{children}</code>
      case 'italic':
        return <em {...attributes}>{children}</em>
      case 'underlined':
        return <u {...attributes}>{children}</u>
      default:
        return next()
    }
  }

  onChange = ({ value }) => {
    this.setState({ value })
  }

  onKeyDown = (event, editor, next) => {
    let mark

    if (isBoldHotkey(event)) {
      mark = 'bold'
    } else if (isItalicHotkey(event)) {
      mark = 'italic'
    } else if (isUnderlinedHotkey(event)) {
      mark = 'underlined'
    } else if (isCodeHotkey(event)) {
      mark = 'code'
    } else {
      return next()
    }

    event.preventDefault()
    editor.toggleMark(mark)
  }


  onClickMark = (event, type) => {
    event.preventDefault()
    this.editor.toggleMark(type)
  }


  onClickBlock = (event, type) => {
    event.preventDefault()

    const { editor } = this
    const { value } = editor
    const { document } = value

    // Handle everything but list buttons.
    if (type !== 'bulleted-list' && type !== 'numbered-list') {
      const isActive = this.hasBlock(type)
      const isList = this.hasBlock('list-item')

      if (isList) {
        editor
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list')
      } else {
        editor.setBlocks(isActive ? DEFAULT_NODE : type)
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      const isList = this.hasBlock('list-item')
      const isType = value.blocks.some(block => {
        return !!document.getClosest(block.key, parent => parent.type === type)
      })

      if (isList && isType) {
        editor
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list')
      } else if (isList) {
        editor
          .unwrapBlock(
            type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
          )
          .wrapBlock(type)
      } else {
        editor.setBlocks('list-item').wrapBlock(type)
      }
    }
  }
}

export default TextEditor;