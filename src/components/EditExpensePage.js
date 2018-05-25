import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
    <div>
        Editing the expence with id { props.match.params.id }
    </div>
    );
};

export default EditExpensePage;