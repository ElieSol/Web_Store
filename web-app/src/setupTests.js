import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import dirtyChai from 'dirty-chai'
import createChaiJestDiff from 'chai-jest-diff'


chai.use(dirtyChai);
chai.use(dirtyChai).use(createChaiJestDiff());

configure({ adapter: new Adapter() });

