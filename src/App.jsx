import { Tab } from 'semantic-ui-react'

const panes = [
  {
    menuItem: 'App Store',
    render: () => <Tab.Pane attached={false}>App Store Meta Content</Tab.Pane>,
  },
  {
    menuItem: 'Google Play',
    render: () => <Tab.Pane attached={false}>Google Play Meta Content</Tab.Pane>,
  },
]

function App() {
  return (
    <div className="content">
      <div className="content__header">
        <div className="logo"></div>
        <div className="project-name">META MAGIC</div>
      </div>

      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </div>
  )
}

export default App
