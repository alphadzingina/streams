import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    };

    render() {
        return (
            <div className="streamCreate">
                <h1>Create a Stream</h1>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect( null, {
    createStream: createStream
})(StreamCreate);