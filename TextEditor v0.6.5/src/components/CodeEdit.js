// import brace from 'brace';
import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/python';
import 'brace/theme/dracula';


export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.onChange = this.onChange.bind(this);
    }

    onChange(newValue) {
        // console.log('change', newValue);
    }

    render() {
        return (
            <div>
                <AceEditor
                    mode="python"
                    theme="dracula"
                    name="ace214"
                    height='500px'
                    width='1000px'
                    onLoad={this.onLoad}
                    // onChange={this.onChange}
                    fontSize={13}
                    debounceChangePeriod={1000}
                    // showPrintMargin={true}
                    // showGutter={true}
                    highlightActiveLine={false}
                    value={''}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        tabSize: 4,
                    }}
                />
            </div>
        );
    }
}



















