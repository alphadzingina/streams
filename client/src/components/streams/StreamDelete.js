import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
    const modalActions = (
        <React.Fragment>
            <div class="ui button primary">No</div>
            <div class="ui button negative">Yes</div>
            </React.Fragment>
    );
    return(
        <div>
            StreamDelete
            <Modal 
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                actions={modalActions}
                onDismiss={() => history.push('/')}
            />
        </div>
    );
};

export default StreamDelete;