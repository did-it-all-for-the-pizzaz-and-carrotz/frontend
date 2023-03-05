import { Button, Modal } from 'antd';
import MyButton from 'components/Button/Button';
import { useState } from 'react';

const TermsOfService = ({onClick}) => { 
    return (
        <Modal
            open={true}
            footer={[
                <MyButton title="Powrót" type="regular" onClick={onClick} />
            ]}
            width="80%"
            closable={false}
        >
            <h2 style={{textAlign:"center"}}>Regulamin Chatu</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium arcu ut venenatis varius. Nam ut massa a enim elementum blandit. Integer a fermentum turpis, non iaculis tellus. Nulla malesuada, lectus eu euismod tempor, orci mi pellentesque nulla, at molestie risus tortor vitae dolor. Morbi lacus nisi, accumsan non ullamcorper sed, luctus eleifend dui. Donec et sollicitudin enim, sed tincidunt sem. Pellentesque ultrices dignissim commodo. Vivamus vitae orci iaculis, viverra quam vitae, pellentesque justo. Vivamus egestas laoreet auctor. Curabitur vitae odio consequat, suscipit neque ut, tincidunt velit. Nulla at magna posuere massa tincidunt porttitor.
                Nulla maximus neque non enim ullamcorper, sit amet vestibulum lacus vulputate. In volutpat, diam in malesuada sollicitudin, lorem ante malesuada enim, sit amet egestas neque odio vitae nisi. Nunc sapien velit, convallis ac justo id, tempor dictum magna. Sed non rutrum ipsum. Integer sed magna eget ligula hendrerit consectetur nec in nulla. Mauris id aliquam metus, ut pretium lacus. Ut viverra lacus vitae dictum mattis. Nulla faucibus, leo eget hendrerit imperdiet, neque odio consequat nisl, eget faucibus justo ex a magna. Morbi ut placerat enim.
                Proin nisi dui, fermentum id hendrerit a, viverra eu libero. Sed turpis nibh, efficitur a lacus in, semper semper tellus. Aenean feugiat, augue at pretium semper, lorem nisl molestie nisl, sit amet aliquet sapien mauris non ante. Mauris commodo laoreet interdum. Sed rutrum diam maximus lorem bibendum rhoncus. Nulla cursus nulla tortor, a tincidunt nunc efficitur vitae. Aenean ullamcorper suscipit orci, nec venenatis neque mollis sit amet. In rhoncus maximus enim commodo tristique. Donec tempor enim eget congue ultrices. Donec at tellus eu est porttitor euismod a in nisl. Sed ultricies quis felis non finibus. Nullam hendrerit venenatis tincidunt. Vestibulum in urna velit. Phasellus felis quam, feugiat eu scelerisque in, ultricies eget metus. Fusce quis mi eu ex suscipit mollis volutpat eget ipsum. Aliquam lacinia, leo id congue cursus, felis nisi commodo sem, eget gravida ligula dui sed nunc.
                Morbi ultricies a urna malesuada feugiat. Integer volutpat ante vel ex laoreet, eu consequat ex faucibus. Praesent posuere ipsum tellus, a condimentum nibh congue sit amet. Etiam tristique nec augue at euismod. Pellentesque leo diam, feugiat non iaculis non, tempor at nunc. Nullam vel facilisis tellus. Nulla facilisis blandit laoreet. Phasellus faucibus elementum elit tincidunt facilisis. Ut aliquet pretium diam hendrerit elementum. Nam blandit purus dui, vitae tincidunt velit laoreet at. Mauris venenatis magna vitae dui pretium lobortis. Nullam hendrerit ligula vitae neque interdum, non consequat libero posuere.
                Donec maximus, urna nec facilisis pretium, sapien ante sollicitudin erat, quis ultrices est purus ac quam. In magna felis, interdum non consectetur nec, sodales sit amet ipsum. Nullam quis arcu quis justo mattis consectetur vitae at eros. Fusce leo diam, pretium vitae eros ac, cursus interdum augue. Nullam metus mauris, sagittis eu gravida et, mollis sodales nisi. Sed ac tempus tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus consequat fermentum sapien, vel mollis mauris iaculis</p>
        </Modal>
    );
};
export default TermsOfService;