import React from 'react';
import PropTypes from 'prop-types';
import SpecFragment from 'wb-forms/dist/CatCharacteristics/Spec';

export default function Specification({match}) {
  const {ref} = match.params;
  const ox = $p.cat.characteristics.get(ref);
  return <div style={{height: 'calc(100vh - 50px)'}}>
    <SpecFragment _obj={ox} elm={0}/>
  </div>;
}
