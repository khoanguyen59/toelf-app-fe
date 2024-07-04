import { useStore } from '@/RootStoreProvider';
import { LayoutContainer } from '@components/common/LayoutContainer';
import LayoutHeader from '@components/headers/LayoutHeader';
import ProfileHeader from '@components/headers/ProfileHeader';
import LectureCard from '@components/lecture/LectureCard';
import BottomNavigationMenu from '@components/menus/BottomNavigationMenu';
import { InfoLecture } from '@dto/lectures/InfoLecture.dto';
import { Box } from '@mui/material';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface ComponentProps {}

const LectureDetailLayout: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { lectureStore } = useStore();
  const { lecture } = lectureStore;
  
  useEffect(() => {
    lectureStore.getLecture(+id);
  }, [id]);

  return (
    <LayoutContainer>
      <LayoutHeader title={`Lecture #${id}`} />
      <LectureCard lecture={lecture} isDetailed />
      <BottomNavigationMenu />
    </LayoutContainer>
  );
};

export default observer(LectureDetailLayout);
