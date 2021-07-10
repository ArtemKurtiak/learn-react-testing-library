import App from "./App";


// getByParameter should use only when is expecting the element should be
// queryByParameter should use when is expecting the element is null || undefined
// findByParameter should use when asynchronous actions are on website, it do all asynchronous action and then check document for parameter

jest.mock('axios')

describe('App', () => {
    // it('should render correctly', function () {
    //     render(<App/>);
    //     expect(screen.getByText(/Bye/i)).toBeInTheDocument()
    // });
    // it('should change UI correctly', async function () {
    //     render(<App/>);
    //     expect(screen.getByText(/Bye/i)).toHaveTextContent('Bye, anonymous');
    //
    //     userEvent.click(screen.getByRole('button'));
    //
    //     expect(screen.getByText(/Hello/i)).toHaveTextContent('Hello, friend')
    //
    //     userEvent.click(screen.getByRole('button'));
    //
    //     expect(screen.getByText(/Bye/i)).toHaveTextContent('Bye, anonymous');
    //
    // });
    //
    // it('should render data from api', async function () {
    //     render(<App/>);
    //     axios.get.mockImplementationOnce(() => Promise.resolve({
    //         data: [
    //             {id: 1, name: 'Artem'}
    //         ]
    //     }));
    //     userEvent.click(screen.getByRole('button'));
    //     expect(await screen.findByText('Artem')).toBeInTheDocument();
    // });
    // it('should render correctly', async function () {
    //     render(<App />);
    //     // fireEvent.change(screen.getByPlaceholderText('Order text'), {
    //     //     target: {
    //     //         value: 'artem'
    //     //     }
    //     // });
    //     userEvent.type(screen.getByPlaceholderText('Order text'), 'artem')
    //     expect(await screen.findByText(/Orderingggg/i)).toHaveTextContent('Orderingggg artem')
    // });
    // it('should be checked correctly', async function () {
    //     const {container} = render(<input type={'checkbox'} defaultValue={'true'} />);
    //     const checkbox = container.firstChild;
    //     expect(checkbox).not.toBeChecked();
    //     userEvent.click(checkbox);
    //     expect(checkbox).toBeChecked()
    // });
    // it('should focus correctly', function () {
    //     const { getByTestId } = render(<input type={'text'} data-testid={'test'} />)
    //     const input = getByTestId('test');
    //     expect(input).not.toHaveFocus();
    //     input.focus();
    //     expect(input).toHaveFocus();
    // });
    // it('should doubleClick correctly', function () {
    //     const change = jest.fn();
    //     const { container } = render(<input type={'checkbox'} onChange={change} /> );
    //     const checkbox = container.firstChild;
    //     userEvent.dblClick(checkbox);
    //     expect(change).toHaveBeenCalledTimes(2)
    // });
    // it('should move around interface', function () {
    //     const { getAllByTestId } = render(
    //         <div>
    //             <input type="text" data-testid={'tab'} />
    //             <input type="number" data-testid={'tab'} />
    //             <input type="radio" data-testid={'tab'} />
    //         </div>
    //     );
    //     const [text, number, radio] = getAllByTestId('tab');
    //     userEvent.tab();
    //     expect(text).toHaveFocus();
    //     userEvent.tab();
    //     expect(number).toHaveFocus();
    //     userEvent.tab();
    //     expect(radio).toHaveFocus();
    // });
    // it('should select correctly', function () {
    //     const { getByRole, getByText } = render(
    //         <select>
    //             <option value="a">1</option>
    //             <option value="b">2</option>
    //             <option value="c">3</option>
    //         </select>
    //     );
    //     userEvent.selectOptions(getByRole('combobox'), 'a');
    //     expect(getByText('1').selected).toBeTruthy()
    //     userEvent.selectOptions(getByRole('combobox'), 'b');
    //     expect(getByText('2').selected).toBeTruthy()
    //     userEvent.selectOptions(getByRole('combobox'), 'c');
    //     expect(getByText('3').selected).toBeTruthy()
    // });
    //
    // it('should type correctly', async function () {
    //     render(<App />);
    //     await screen.findByText(/Hello/i)
    //     expect(screen.getByText(/Orderingggg/i)).toBeInTheDocument();
    //     userEvent.type(screen.getByPlaceholderText('Order text'), 'artem');
    //     expect(screen.getByText(/Orderingggg artem/i)).toBeInTheDocument()
    //     // expect(screen.getByText(/Orderingggg/i)).toHaveTextContent(/Orderingggg artem/i);
    // });
    // it('render App component', async() => {
    //     render(<App/>);
    //     // expect(screen.queryByText(/Hello, your name is /i)).toBeNull();
    //     expect(await screen.findByText(/Hello, your name is /i)).toBeInTheDocument();
    // });
    // it('User block should have correct class', async function () {
    //     render(<App />);
    //     expect(await screen.findByText(/Hello, your name is/i)).toHaveClass('user-name')
    // });
    // it('h5 block should have correct attributes', () => {
    //     render(<App />);
    //     expect(screen.getByText(/Orderingggg/i)).toHaveAttribute('draggable')
    //
    // })
    // it('should render home page', function () {
    //     const history = createMemoryHistory();
    //     const { container, getByTestId } = render(<Router history={history}>
    //         <App />
    //     </Router>);
    //     const header = getByTestId('header');
    //     const link = getByTestId('home');
    //     expect(container.innerHTML).toMatch('Home');
    //     expect(header).toContainElement(link)
    // });
    // it('should navigate correctly', function () {
    //     const { container, getByTestId } = render(<BrowserRouter>
    //         <App />
    //     </BrowserRouter>);
    //     fireEvent.click(getByTestId('users'))
    //     expect(container.innerHTML).toMatch(/User: Artem/i);
    // });
    //
    // it('should navigate correctly when path is incorrect', function () {
    //     const { container, getByTestId } = render(<BrowserRouter  >
    //         <App />
    //     </BrowserRouter>);
    //     fireEvent.click(getByTestId('bad'))
    //     expect(getByTestId('location')).toHaveTextContent('/bad')
    // });
    // it('should count correctly', function () {
    //     const { getByTestId } = render(<App />);
    //     expect(getByTestId('count')).toHaveTextContent('0');
    //     userEvent.click(getByTestId('increment'));
    //     expect(getByTestId('count')).toHaveTextContent('1');
    //     userEvent.click(getByTestId('decrement'));
    //     expect(getByTestId('count')).toHaveTextContent('0');
    // });
})

