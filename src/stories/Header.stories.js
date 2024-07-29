import React from 'react';
import Header from './Header.js';

export default {
  title: 'Component/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: "CP FAN SITE",
};



