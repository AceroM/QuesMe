import React from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navItems: Store.getSidebarItems()
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
      navItems: Store.getSidebarItems()
    });
  }

  render() {
    const { navItems: items } = this.state;
    console.log(items);
    const displayItems = items.map((item, idx) => (
      console.log(item.title),
      console.log(idx),
      item.title == "Classroom Overview" || 
      item.title == "Change Modes" || 
      item.title == "Add New Question" || 
      item.title == "Student Profiles" ? (
        <SidebarNavItem key={idx} item={item} />
      ) : (
        <div></div>
      )

    ))
    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">
          {displayItems}
        </Nav>
      </div>
    )
  }
}

export default SidebarNavItems;
