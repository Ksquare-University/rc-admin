import * as React from 'react';
import clsx from 'clsx';
import { styled, Box, Theme } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { boolean } from 'yargs';
import {NewRestaurantForm} from '../../../views/RestaurantForm/index'

const BackdropUnstyled = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;


type Props = {
        openState?: boolean,
        parentCallback:(arg:boolean) =>void
  }
export default function ModalUnstyledDemo({openState=false, parentCallback}:Props) {
  const [open, setOpen] = React.useState(openState);
  const handleClose = () => {
    setOpen(false)
    parentCallback(false);
};
  React.useEffect(()=>{
    if(openState!=open){
        setOpen(!open);
    }
  }, [openState])

  return (
    <div>

      <Modal

        open={open}
        onClose={handleClose}
        slots={{ backdrop: Backdrop }}
      >
          <NewRestaurantForm/>
      </Modal>
    </div>
  );
}