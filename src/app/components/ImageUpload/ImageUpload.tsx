import Icon from '@mdi/react';
import { mdiUpload, mdiDelete } from '@mdi/js';
import * as IU from './ImageUpload.styles';
import { ChangeEvent, useState } from 'react';
import Button from '../Button/Button';
import FileService from '../../../sdk/services/File.service';


export interface ImageUploadProps {
    label: string
}

function ImageUpload({ label }: ImageUploadProps) {

    const [filePreview, setFilePreview] = useState<string | null>(null)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files![0];
        if (file) {
            const reader = new FileReader();

            reader.addEventListener('load', async e => {
                setFilePreview(String(e.target?.result));
                const imageUrl = await FileService.upload(file);
                console.log(imageUrl);
            })

            reader.readAsDataURL(file);
        }
    }

    const removerIcon = <Icon
        size={'24px'}
        path={mdiDelete}
    />

    if (filePreview) {
        return <IU.ImagePreviewWrapper>
            <IU.ImagePreview preview={filePreview}>
                <Button variant={'removerImagem'} label={'Remover imagem'}
                    onClick={() => setFilePreview(null)}> {removerIcon} </Button>
            </IU.ImagePreview>
        </IU.ImagePreviewWrapper>
    }

    return <IU.Wrapper>
        <IU.Label>
            <Icon
                size={'24px'}
                path={mdiUpload}
            />
            {label}
            <IU.Input type="file" onChange={handleChange} />
        </IU.Label>
    </IU.Wrapper>
}

export default ImageUpload;
