// import brace from 'brace';
import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/python';
import 'brace/mode/sql';
import 'brace/mode/javascript';
import 'brace/theme/dracula';

import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.editorChange = this.editorChange.bind(this);
    }
    state = {
        codeMode:'python',
        usrValue:''
    }
    handleLangChange = (e) => {
        this.setState({codeMode:e.target.value});
    }
    editorChange = (val) => {
        this.setState({usrValue:val});
    }

    render() {
        return (
            <div style={{flexDirection:'column-reverse',display:'flex', justifyContent:'center'}}>
                <div style={{marginTop:'10px', display:'flex', justifyContent:'center', minWidth:'1039px'}}>
                      <FormControl variant="outlined" style={{margin:'auto'}}>
                        {/* <InputLabel htmlFor="outlined-age-simple">
                        Language
                        </InputLabel> */}
                        <Select
                        value={this.state.codeMode}
                        onChange={this.handleLangChange}
                        input={<OutlinedInput
                            labelWidth='20px' style={{minWidth:'10vh'}}
                            name="age" id="outlined-age-simple" />}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'python'}>Python</MenuItem>
                        <MenuItem value={'javascript'}>Javascript</MenuItem>
                        <MenuItem value={'sql'}>SQL</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{margin:'auto'}}>
                    <AceEditor
                        mode={this.state.codeMode}
                        theme="dracula"
                        name="ace214"
                        height='70vh'
                        width='130vh'
                        onChange={this.editorChange}
                        onLoad={this.onLoad}
                        fontSize={13}
                        debounceChangePeriod={1000}
                        wrapEnabled={true}
                        highlightActiveLine={false}
                        value={this.state.usrValue}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: true,
                            tabSize: 4,
                        }}/>
                </div>
            </div>
        );
    }
}



















