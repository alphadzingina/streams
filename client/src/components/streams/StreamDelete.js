import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderModalActions() {
        const id = this.props.match.params.id;

        return (
            <React.Fragment>
                <Link to='/'  className="ui red basic cancel inverted button">
                    <i className="remove icon"></i>
                    No
                </Link>
                <button onClick={() => this.props.deleteStream(id)} className="ui green ok inverted button">
                    <i className="checkmark icon"></i>
                    Yes
                </button>
            </React.Fragment>
        );
    }

    renderModalContent() {
        if (!this.props.stream) {
          return 'Are you sure you want to delete this stream?';
        }
    
        return (
            `Are you sure you want to delete ${this.props.stream.title}`
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
    fetchStream: fetchStream,
    deleteStream: deleteStream
})(StreamDelete);