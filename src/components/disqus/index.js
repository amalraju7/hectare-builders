import { DiscussionEmbed } from 'disqus-react';
import classes from './index.module.scss';

function DisqusForm() {
    const disqusShortname = 'Hectare';

    const disqusConfig = {
        url: 'https://hectare.disqus.com/',
        identifier: '123',
        title: 'hectare-post',
    };
    return (
        <div className={classes.area}>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </div>
    );
}

export default DisqusForm;
