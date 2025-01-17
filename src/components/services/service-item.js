import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoAddSharp } from 'react-icons/io5';
import classes from './service.module.scss';

function ServiceItem({ service }) {
    const imagePath = `/images/services/${service?.slug}/${service?.mediumImage}`;
    const linkPath = `/services/${service?.slug}`;

    return (
        <div className="service-item">
            <Link href={linkPath} className={classes.img}>
                <img
                    className="img-services"
                    src={imagePath}
                    alt={service?.title}
                />
            </Link>
            <div className={classes.add__action}>
                <h2 className="title mb-0">
                    <Link href={linkPath}>{service?.title}</Link>
                </h2>
                <div className={classes.icon}>
                    <Link href="mailto://info@example.com" passHref>
                        <IoAddSharp />
                    </Link>
                </div>
            </div>
        </div>
    );
}

ServiceItem.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceItem;
