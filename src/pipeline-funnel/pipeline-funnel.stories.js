import React from 'react'
import { storiesOf } from '@storybook/react';
import PipelineFunnel from './index'
// import RightClickMd from  './right-click.md'

let stages = [{
    title: 'Requests Information',
    goal: 2000,
    actual: 1526,
    revenue: '$15M',
    revLabel: 'Potential Revenue'
  }, {
    title: 'Begins Application',
    goal: 2000,
    actual: 903,
    revenue: '$1.5M',
    revLabel: ''
  }, {
    title: 'Completes Application',
    goal: 2000,
    actual: 827,
    revenue: '$850K',
    revLabel: ''
  }, {
    title: 'Enrolls',
    goal: 2000,
    actual: 499,
    revenue: '$575',
    revLabel: ''
  }]
   
storiesOf('PipelineFunnel', module).add('demo', ()=> (
    <PipelineFunnel 
    data = {stages}
    outerValueIdentifier = 'revenue'
    outerSecondaryValueIdentifier = 'revLabel'
    innerValueIdentifier = 'actual'
    compareValueIdentifier = 'goal'
    outerLabelIdentifier = 'goalLabel' />
))