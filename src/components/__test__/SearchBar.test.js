import renderer from 'react-test-renderer';
import SearchBar from '../SearchBar';

test('renders user input', () => {
    const tree = renderer
        .create(
            <SearchBar
                setFilteredData={() => {}}
                setWordEntered={() => {}}
            />
        ).toJSON();
    
    expect(tree).toMatchSnapshot();
})
