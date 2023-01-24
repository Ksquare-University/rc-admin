import React, {useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { StateI } from '../../../../store/slices';
import { formInformation } from '../../../../store/slices/RestaurantForm/index'
import { Information } from '../../../../store/slices/RestaurantForm/reducers';
import { InformationContainer } from './InformationContainer'


type UserSubmitForm = {
    name: string;
    description: string;
  };

  type Props = {
    parentCallback:() =>void
  }
export function ViewInformation({parentCallback}:Props) {

    return(

        <div className='RestaurantInfo'>
          <InformationContainer parentCallback={parentCallback}/>
        </div>
    );
  };