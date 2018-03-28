import React from 'react';
import Block from './Block';
import DangerButton from './../button/DangerButton';
import Paragraph from './../paragraph/Paragraph';

export default ({ title, warningText, handleDelete, className }) => (
  <Block title={title} className={'danger ' + className}>
    <div className="_fx _items-center _p20">
      <div className="_grow">
        <Paragraph>{warningText}</Paragraph>
      </div>
      <div>
        <DangerButton title="Supprimer" onClick={handleDelete} />
      </div>
    </div>
  </Block>
);
