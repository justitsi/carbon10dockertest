import React, { Component } from 'react';
import Button from "../../../node_modules/carbon-components-react/lib/components/Button";
import Form from "../../../node_modules/carbon-components-react/lib/components/Form";
import FormGroup from "../../../node_modules/carbon-components-react/lib/components/FormGroup";
import TextInput from "../../../node_modules/carbon-components-react/lib/components/TextInput";




class WordPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
        this.props.setWordFunction(this.state.value)
        event.preventDefault();
    }

    render (){
        return (
            <>
                <div className="bx--col-lg-5">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <TextInput
                            helperText="Text should consist of only one word"
                            id="wordBox"
                            invalidText="Invalid error message."
                            labelText="Text Input label"
                            placeholder="Type your word here - e.g.: Banana"
                            value={this.state.value}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        <Button
                            kind="primary"
                            tabIndex={0}
                            type = "submit"
                        >
                            Check Synonyms
                        </Button>
                    </Form>
                </div>
            </>
        );  
    }
}
export default WordPicker