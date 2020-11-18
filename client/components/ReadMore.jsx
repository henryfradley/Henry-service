import React from 'react';
import ReadMoreReact from 'read-more-react';

let ReadMore = function(props) {
    let text = `Placeat est magni dicta explicabo similique sunt ullam soluta aut. Aut sint fugit architecto quos. Quis ut aut iusto illo. Quo magni distinctio nisi dignissimos perferendis quisquam. Eos quam sed nam consectetur qui non similique quis.

    Odio error amet eum et aut ut eius enim. Ad rerum est sit mollitia. Dolore accusamus velit vel voluptas nam reprehenderit dignissimos eveniet. Corrupti ducimus qui enim quos repudiandae. Animi sint at quia qui voluptatum ut eum consequatur. Labore excepturi et placeat dolor hic repudiandae.

    Quo recusandae iusto exercitationem aliquam cum rem. Repellendus cumque temporibus nihil voluptate velit laboriosam. Deleniti a laborum nostrum commodi consequuntur eaque maxime beatae.`
    // let text = props.description;
    return (
        <ReadMoreReact text={text}
            min={50}
            ideal={200}
            max={1000}
            readMoreText="Read more..."/>
    )

}

export default ReadMore;