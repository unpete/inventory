// модификаторы справочников

import CharacteristicsFrmObj from 'wb-forms/dist/CatCharacteristics/FrmObj';
import SpecFragment from 'wb-forms/dist/CatCharacteristics/Spec';
import CatUsersObj from '../../components/CatUsers/CatUsersObj';

export default function ({cat}) {
  cat.forEach((mgr) => {
    if(mgr.cachable === 'doc' && mgr.class_name !== 'cat.characteristics') {
      mgr._cachable = 'ram';
    }
  });

  cat.users.FrmObj = CatUsersObj;
  cat.characteristics.FrmObj = CharacteristicsFrmObj;
  cat.characteristics.SpecFragment = SpecFragment;
}
