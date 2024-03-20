import React, {useState, useCallback, useImperativeHandle, forwardRef, useEffect} from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw, ContentState, Modifier  } from 'draft-js';


import iconAlignCenter from "../assets/icons/align_center.svg";
import iconAlignLeft from "../assets/icons/align_left.svg";
import iconAlignRight from "../assets/icons/align_right.svg";
import iconBold from "../assets/icons/bold.svg";
import iconItalics from "../assets/icons/italics.svg";
import iconUnderScore from "../assets/icons/underscore.svg";
import iconOderedList from "../assets/icons/ordered_list.svg";
import iconUnoderedList from "../assets/icons/unordered_list.svg";





const MyEditor = forwardRef((props, ref)  =>{
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [cursorStyle, setCursorStyle] = useState([]);
  // render init data
  useEffect(() => {
    if(props.rawContent && Object.keys(props.rawContent).length !== 0){
      setContentFromRaw(props.rawContent);
    }else if(props.textContent){
        setContentFromText(props.textContent);
    }
    
  }, [])



  /////////////////////////////////////////////////////////
  // get style of current content
  const getStylesAtCursor = (editorState) => {
    const selection = editorState.getSelection();
    const currentContent = editorState.getCurrentContent();
    let style = {};

    if (!selection.isCollapsed()) {
      const startKey = selection.getStartKey();
      const startOffset = selection.getStartOffset();
      const blockWithStart = currentContent.getBlockForKey(startKey);
      style = blockWithStart.getInlineStyleAt(startOffset);  // if bold, italic
      style = style.toArray(); 
      // font family and size
      const metadata = blockWithStart.getData();  
      style.push(metadata.get("fontSize"));  
      style.push(metadata.get("fontFamily"));
      // if is ordered/unordered list
      const blockType = blockWithStart.getType();
      if (blockType ) {
        style.push(blockType);
      } 

    } else {
      const focusKey = selection.getFocusKey();
      const focusOffset = selection.getFocusOffset();
      const blockWithFocus = currentContent.getBlockForKey(focusKey);
      style = blockWithFocus.getInlineStyleAt(Math.max(focusOffset - 1, 0));  // if bold, italic
      style = style.toArray(); 
       // font family and size
      const metadata = blockWithFocus.getData();
      style.push(metadata.get("fontSize"));
      style.push(metadata.get("fontFamily"));
      // if is ordered/unordered list
      const blockType = blockWithFocus.getType();
      if (blockType ) {
        style.push(blockType);
      } 
    }


    //  text align type
    let alignType = getSelectedContentAlignedType(editorState);
    if(alignType){
      style.push(alignType);
    };

    
    return  style;
  };

  // get the style of where the cursor is to as to render the buttons:on 
  const onChange = (newEditorState) => {
    const stylesAtCursor = getStylesAtCursor(newEditorState);
    setCursorStyle(stylesAtCursor);
    setEditorState(newEditorState);
  };

  // list tyle
  const toggleInlineStyle = useCallback((inlineStyle) => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  }, [editorState, onChange]);

  // bold/underscore
  const toggleBlockType = useCallback((blockType) => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  }, [editorState, onChange]);


    //  for text alignment
    function toggleTextAlignment(editorState, alignment) {
      const selection = editorState.getSelection();
      const contentState = editorState.getCurrentContent();
    
      const newContentState = Modifier.mergeBlockData(
        contentState,
        selection,
        { textAlign: alignment }
      );
    
      return EditorState.push(editorState, newContentState, 'change-block-data');
    }

    const applyAlignment = (alignment) => {
      const newState = toggleTextAlignment(editorState, alignment);
      setEditorState(newState);
    };

    //////////////////////  block style ///////////////////////
    function blockStyleFn(block) {
      let className = '';

      const textAlign = block.getData().get('textAlign');
      if (textAlign) {
        className += ` textAlign${textAlign.charAt(0).toUpperCase() + textAlign.slice(1)}`;
      }
      const blockData = block.getData();
      if (blockData.get('fontSize')) {
        className += " " + blockData.get('fontSize');
      }
      if (blockData.get('fontFamily')) {
        className +=  " " + blockData.get('fontFamily');
      }
      return className;
    }

    function getSelectedContentAlignedType(editorState) {
      const selection = editorState.getSelection();
      const contentState = editorState.getCurrentContent();
      const startKey = selection.getStartKey();
      const startBlock = contentState.getBlockForKey(startKey);
      const blockData = startBlock.getData();
      const textAlign = blockData.get('textAlign');
    
      return textAlign;
    }



  // Set content
  const setContentFromRaw = (rawContent) => {
    // const contentState = convertFromRaw(rawContent);
    setEditorState(EditorState.createWithContent(convertFromRaw(rawContent)));
  }
  const setContentFromText = (text) => {
    const contentState = ContentState.createFromText(text);
    setEditorState(EditorState.createWithContent(contentState));
  }


  // get Content
  const getRawContent = () => {
    return convertToRaw(editorState.getCurrentContent());
  }
  const getTextContent = () => {
    const rawContent = convertToRaw(editorState.getCurrentContent());
    let content = "";
    for(let i =0; i<rawContent.blocks.length; i++){
      content += rawContent.blocks[i].text + "\n";
    }
    return content;
  }

  // font size and family
  const applyClassFromSelection = useCallback((className, type) => {
    const selection = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const blocks = contentState.getBlockMap();

    // Apply class to each block within selection
    const newBlocks = blocks.map((block) => {
      if (selection.hasEdgeWithin(block.getKey(), 0, block.getLength())) {
        // Use metadata to store the class information
        let newBlock = block.set('data', block.getData().merge({[type]: className}));
        return newBlock;
      }
      return block;
    });

    const newContentState = contentState.set('blockMap', newBlocks);
    const newEditorState = EditorState.push(editorState, newContentState, 'change-block-data');

    setEditorState(EditorState.forceSelection(newEditorState, selection));
  }, [editorState]);



  ///////////////////////////////////////////////////////////////////////////////////////////
  // pass function for parent compenet
  ///////////////////////////////////////////////////////////////////////////////////////////
  useImperativeHandle(ref, () => ({
    getRawContent(){
      return getRawContent();
    },
    getTextContent(){
      return getTextContent();
    },
    setRawContent(rawContent){
      setContentFromRaw(rawContent);
    },
    setTextContent(content){
      setContentFromText(content);
    },
    setContentFromText,

  }))


    return (
      <div className='editor-container' id="editor-container">
        {props.showTools ?
          <div className="toolbar">
                <select className='toolbar-btn-select' onChange={(e) => applyClassFromSelection(e.target.value, 'fontSize')}>
                  <option value=""></option>
                  <option value="fontSizeNormal">Normal</option>
                  <option value="fontSizeH1">Heading1</option>
                  <option value="fontSizeH2">Heading2</option>
                  <option value="fontSizeH3">Heading3</option>
                  <option value="fontSizeSmall">Small</option>
                </select>

                <select className='toolbar-btn-select' onChange={(e) => applyClassFromSelection(e.target.value, 'fontFamily')}>
                  <option value=""></option>
                  <option value="fontFamilySansSerif">Arial</option>
                  <option value="fontFamilySerif">Georgia</option>
                  <option value="fontFamilyTimes">Times New Roman</option>
                  <option value="fontFamilyCourier">Courier</option>
                  <option value="fontFamilyLucida-console">Lucida Console</option>
                  <option value="fontFamilyConsolas">Consolas</option>
                </select>

            <button className={`toolbar-btn-type1 is-cursor-style-${cursorStyle.includes("BOLD")}`} onClick={() => toggleInlineStyle('BOLD')}><img src={iconBold} alt="icon bold"></img></button>
            <button className={`toolbar-btn-type1 is-cursor-style-${cursorStyle.includes("ITALIC")}`} onClick={() => toggleInlineStyle('ITALIC')}><img src={iconItalics} alt="icon italics"></img></button>
            <button className={`toolbar-btn-type1 is-cursor-style-${cursorStyle.includes("UNDERLINE")}`} onClick={() => toggleInlineStyle('UNDERLINE')}><img src={iconUnderScore} alt="icon underscore"></img></button>
            <button className={`toolbar-btn-type1 is-cursor-style-${cursorStyle.includes("unordered-list-item")}`} onClick={() => toggleBlockType('unordered-list-item')}><img src={iconUnoderedList} alt="icon unordered list"></img></button>
            <button className={`toolbar-btn-type1 is-cursor-style-${cursorStyle.includes("ordered-list-item")}`} onClick={() => toggleBlockType('ordered-list-item')}><img src={iconOderedList} alt="icon ordered list"></img></button>
          
            <button className={`toolbar-btn-type1 is-cursor-style-${cursorStyle.includes("left")}`} onClick={() => applyAlignment('left')}><img src={iconAlignLeft} alt="icon align left"></img></button>
            <button className={`toolbar-btn-type1 is-cursor-style-${cursorStyle.includes("center")}`} onClick={() => applyAlignment('center')}><img src={iconAlignCenter} alt="icon align center"></img></button>
            <button className={`toolbar-btn-type1 is-cursor-style-${cursorStyle.includes("right")}`} onClick={() => applyAlignment('right')}><img src={iconAlignRight} alt="icon align right"></img></button>
        
          </div>
          : ""
        }
        <div className='editor-block'>
          <Editor 
            editorState={editorState} 
            onChange={onChange} 
            blockStyleFn={blockStyleFn}
          />
        </div>
      </div>
    );
  
});

export default MyEditor;
