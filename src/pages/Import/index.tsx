/* eslint-disable no-await-in-loop */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import filesize from 'filesize';

import Header from '../../components/Header';
import FileList from '../../components/FileList';
import Upload from '../../components/Upload';

import { Container, Title, ImportFileContainer, Footer } from './styles';

import alert from '../../assets/alert.svg';
import api from '../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const history = useHistory();

  const filesLenght = uploadedFiles.length;

  async function handleUpload(): Promise<void> {
    const data = new FormData();

    for (let i = 0; i < filesLenght; i += 1) {
      data.append('file', uploadedFiles[i].file);

      try {
        await api.post('/transactions/import', data);
      } catch (err) {
        console.log(err.response.error);
      }

      data.delete('file');
    }

    history.push('/');
  }

  function submitFile(files: File[]): void {
    const importedFiles: FileProps[] = files.map(file => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
    }));

    setUploadedFiles([...uploadedFiles, ...importedFiles]);
  }

  return (
    <>
      <Header size="small" />
      <Container>
        <Title>Importar uma transação</Title>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <Footer>
            <p>
              <img src={alert} alt="Alert" />
              Permitido apenas arquivos CSV
            </p>
            <button
              onClick={handleUpload}
              type="button"
              disabled={uploadedFiles.length < 1}
            >
              Enviar
            </button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
  );
};

export default Import;
