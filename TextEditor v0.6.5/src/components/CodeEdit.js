// import brace from 'brace';
import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/dracula';


export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        
        this.onChange = this.onChange.bind(this);
    }

    onChange(newValue) {
        console.log('change', newValue);
    }

    render() {
        return (
            <div>
                <AceEditor
                    mode="javascript"
                    theme="dracula"
                    name="ace214"
                    height='500px'
                    width='1000px'
                    onLoad={this.onLoad}
                    onChange={this.onChange}
                    fontSize={13}
                    // showPrintMargin={true}
                    // showGutter={true}
                    highlightActiveLine={true}
                    value={''}
                    setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    
                    showLineNumbers: true,
                    // tabSize: 2,
                    }}/>        
                    {/* Split Editor Option in the works */}
                {/* <SplitEditor
                    mode="java"
                    theme="github"
                    splits={2}
                    orientation="below"
                    value={['hi', 'hello']}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{$blockScrolling: true}}
                />, */}
            </div>
        );
    }
}



















