import React from 'react';

const MemoChild = (props) => {
    console.log("CHILD");
    return (
        <div>
            <h4>The Child Component</h4>
            {props.toggle && <p>This paragraph will toggle</p>}
        </div>
    );
}

export default React.memo(MemoChild);


// prevProps.toggle === currProps.toggle -> true => No need to re-render the component