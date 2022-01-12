import React, {useCallback} from 'react'
import * as S from '../../../pages/EditPostPage/style'

const File = ({attachment, setAttachment, file, setFile ,fileInfo, setFileInfo}) => {
    
    const deleteImg = useCallback(() => {
        setFileInfo('')
        setAttachment('')
        }, [])

    const onFileChange = useCallback(
        e => {
        let reader = new FileReader()
        setFileInfo(e.target.files[0])
        reader.readAsDataURL(e.target.files[0])
        reader.onloadend = finished => {
            setAttachment(finished.target.result)
            e.target.value = ''
        }
        setFile(fileInfo)
        },
        [file]
    )

    return (
        <S.FileWrapper>
        <S.FileLeft>
          <S.MainTitle fontSize="3rem" marginTop="5%" marginBottom="6%">
            참고 자료
          </S.MainTitle>

          <S.FileInput htmlFor="input-file">업로드</S.FileInput>
          <input
            name="file"
            type="file"
            id="input-file"
            style={{ display: 'none' }}
            onChange={onFileChange}
          />
        </S.FileLeft>
        <S.FileRight>
          {attachment && (
            <img src={attachment} width="100%" onClick={deleteImg} />
          )}
        </S.FileRight>
      </S.FileWrapper>
    )
}

export default File
