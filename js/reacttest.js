var ReactRouter = window.ReactRouter
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var Redirect = ReactRouter.Redirect


const App = React.createClass({
  render() {
    return (
      <div>
      <h1>Home</h1>
      <Link to="/about">Some text</Link>
      </div>
    )
  }
})

const About = React.createClass({
  render() {
    return (
      <h1>About</h1>
    )
  }
})

const NoMatch = React.createClass({
  render() {
    return (
      <h1>404</h1>
    )
  }
})


const browserHistory = useRouterHistory(createHistory)({
            basename: '/whatever'
        });
        
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
, document.getElementById('sc-container'))