---
title: "My Third Post"
date: 2018-06-22T15:42:27-05:00
author: 
    given_name: Adam
    family_name: Morris
    display_name: Adam Morris
tags:
- test
- news
- personal
draft: true
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper elit vitae lectus viverra facilisis. Aliquam erat volutpat. Proin at quam iaculis, fermentum ipsum eget, ullamcorper orci. Nulla nec dui id ex dignissim congue id pretium metus. Duis a gravida dolor. Nulla mollis elit nulla, lacinia fringilla mi rhoncus sed. Nam eu quam vitae libero congue euismod. Morbi tempor et ex vitae ornare. Vestibulum iaculis in enim quis condimentum. Proin et cursus dolor, nec varius turpis.

Maecenas vestibulum orci eget sagittis convallis. Nam egestas tortor magna, id pharetra neque congue vitae. Suspendisse commodo orci eros, sit amet tempor lacus congue a. Vestibulum vestibulum purus at metus pharetra, non sollicitudin nunc rutrum. Fusce suscipit, justo eget tincidunt condimentum, mi elit auctor mauris, nec malesuada eros tortor sed diam. Aliquam id maximus metus, in tempor purus. Vivamus porttitor ligula sem, vel vestibulum metus lacinia id. Suspendisse potenti. Suspendisse potenti. 

```jsx
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

ReactDOM.render(<Timer />, mountNode);
```
