import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Get ₹10 By Logging In',
    paragraph:"You will get ₹10 for free just for logging in to the app consecutively for the very first seven days. Do some simple new user tasks in the app and get further Coins. Withdraw Wallet Cash to your account after completing 3 simple tasks through India's best money Earning app."
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/2.webp')}
                      alt="Features tile icon 01"
                       />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="m-0 text-sm">
                    You can earn great rewards by spending 10 minutes per day on the mCash app. Complete Tasks and offers to redeem various gift vouchers.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/3.webp')}
                      alt="Features tile icon 02"
                       />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="m-0 text-sm">
                     There are lots of simple money earning tasks in mCash like doing app installs, Registrations, etc.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/4.webp')}
                      alt="Features tile icon 03" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="m-0 text-sm">
                  Complete survey questionnaires and simple tasks to earn rewards and cashbacks. Withdraw Wallet Cash to your account after completing 3 simple tasks.</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/5.webp')}
                      alt="Features tile icon 04"
                       />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="m-0 text-sm">
                    You earn big cash rewards by inviting friends on mCash. On inviting your first friend you get ₹5 as soon as your friend logs in.</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/1.webp')}
                      alt="Features tile icon 05"
                     />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="m-0 text-sm">
                    While the other gaming applications are paid and chargeable, mCash allows you to play fun games for free, while earning Real cash i.e. money earning games.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
