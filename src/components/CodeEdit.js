import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/keybinding-vim";
import "ace-builds/src-noconflict/ext-language_tools";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.editorChange = this.editorChange.bind(this);
  }
  state = {
    codeMode: "python",
    usrValue: localStorage.getItem("code_edit") || "",
  };
  handleLangChange = (e) => {
    this.setState({ codeMode: e.target.value });
  };
  editorChange = (val) => {
    this.setState({ usrValue: val });
  };
  // handleSave = (_) => {
  // console.log(this.editorChange);
  // localStorage.setItem("code_edit", this.editorChange);
  // console.log("Saved data");
  // };

  render() {
    return (
      <div
        style={{
          flexDirection: "column-reverse",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            minWidth: "1039px",
          }}
        >
          <FormControl variant="outlined" style={{ margin: "auto" }}>
            <Select
              value={this.state.codeMode}
              onChange={this.handleLangChange}
              input={
                <OutlinedInput
                  style={{ minWidth: "10vh" }}
                  name="age"
                  id="outlined-age-simple"
                />
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"python"}>Python</MenuItem>
              <MenuItem value={"javascript"}>Javascript</MenuItem>
              <MenuItem value={"sql"}>SQL</MenuItem>
              <MenuItem value={"java"}>Java</MenuItem>
              <MenuItem value={"golang"}>Go</MenuItem>
            </Select>
          </FormControl>
          <button onClick={this.handleSave}>Save</button>
        </div>
        <div style={{ margin: "auto" }}>
          <AceEditor
            mode={this.state.codeMode}
            keyboardHandler="vim"
            theme="dracula"
            name="ace214"
            height="70vh"
            width="130vh"
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
            }}
          />
        </div>
      </div>
    );
  }
}
