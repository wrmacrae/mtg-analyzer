import React from 'react';
import Expandable from './Expandable';
import { PERFORMANCE_METHOD } from '../App';
import InformationIcon from '../icons/Information'

class Rule extends React.PureComponent {
  render () {
    const {name, description, performance, performanceMethod, target, children} = this.props;
    var width;
    switch(performanceMethod) {
      case PERFORMANCE_METHOD.MINIMUM:
	    width = performance / target * 100;
	    break;
	  case PERFORMANCE_METHOD.MAXIMUM:
	    width = target / performance * 100;
	    break;
	  case PERFORMANCE_METHOD.BOOLEAN:
	    console.log(performanceMethod);
	  	width = target === performance ? 100 : 0;
	    break;
	  default:
	  	width = 50;
    }
    width = Math.max(0, Math.min(100, width));
    const color = width > 75 ? "#FAB700" : "#AC1F39"


  	return (
      <Expandable
        element="li"
        className={width > 75 ? 'passed' :'failed'}
        header={(
          <div className="flex wrappable">
            <div className="flex-main name">{name}</div>
            <div className="flex-sub perf">
              <div className="perf-container">
                <div className="perf-bar" style={{width: width + "%", backgroundColor: color}}></div>
              </div>
            </div>
            <div className="flex-sub chevron">
              <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9" className="icon"><path d="M14.0059397,2.26485497e-14 C15.1072288,2.26485497e-14 15.3722573,0.627746582 14.5881847,1.41182411 L8.70999225,7.29005337 C8.317902,7.68214607 7.67653023,7.6764822 7.29009898,7.29005337 L1.41183294,1.41182411 C0.632099139,0.632095183 0.894513756,2.26485497e-14 1.99406028,2.26485497e-14 L14.0059397,2.26485497e-14 Z"></path></svg></div>
            </div>
          </div>
        )}
        ref={React.createRef()}
      >
        <div className="row text-muted description">
          <InformationIcon />
          <div className="col-md-12">
            {description}
          </div>
        </div>
        <div className="row">
          {children}
        </div>
      </Expandable>
    );
  }
}

export default Rule;