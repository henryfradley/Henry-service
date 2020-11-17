import React from 'react';
import ReadMoreReact from 'read-more-react';

let ReadMore = function(props) {
  // console.log('props.description', props.description)

    return (
        <ReadMoreReact text={props.description}
            min={2}
            ideal={100}
            max={200}
            readMoreText="click here to read more"/>
    )

}

export default ReadMore;