import React from 'react';
import renderer from 'react-test-renderer';
import Controls from "./Controls";

const mockContent = {
  nbHits: 10,
  hits: new Array(10).fill({}),
  nbPages: 2,
  hitsPerPage: 5,
  page: 0
};

const mockNoContent = {
  nbHits: 0,
};

describe('(Component) Controls', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Controls content={mockContent}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should show the clear button when no results', () => {
    const tree = renderer.create(<Controls content={mockNoContent}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});