import { Tab, Menu } from 'semantic-ui-react'
import TabTitle from '@/components/TabTitle.jsx';

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

const panes = [
  {
    menuItem: (
      <Menu.Item>
        <TabTitle title='App Store' />
      </Menu.Item>
    ),
    render: () => <Tab.Pane attached={false}>App Store Meta Content</Tab.Pane>,
  },
  {
    menuItem: (
      <Menu.Item>
        <TabTitle title='Google Play' />
      </Menu.Item>
    ),
    render: () => <Tab.Pane attached={false}>Google Play Meta Content</Tab.Pane>,
  },
]

export default App
