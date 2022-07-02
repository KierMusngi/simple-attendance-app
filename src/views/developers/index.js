import MainCard from 'ui-component/cards/MainCard';
import developers from 'assets/images/developers.JPG';

const DevelopersPage = () => {
    return (
        <MainCard>
            <img src={developers} alt={'developers'} width={'100%'} />
        </MainCard>
    );
};

export default DevelopersPage;
