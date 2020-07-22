import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderModalActions() {
        return (
            <React.Fragment>
                <div className="ui button primary">No</div>
                <div className="ui button negative">Yes</div>
            </React.Fragment>
        );
    }

    renderModalContent() {
        if (!this.props.stream) {
          return 'Are you sure you want to delete this stream?';
        }
    
        return (
            `Are you sure you want to delete the stream with title: ${this.props.stream.title}`
        );
      }

    render() {
        return(
            <Modal 
                title="Delete Stream"
                content={this.renderModalContent()}
                actions={this.renderModalActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }    
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {
    fetchStream: fetchStream
})(StreamDelete);