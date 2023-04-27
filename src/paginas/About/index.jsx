import PostTemplate from "componentes/PostTemplate";
import styles from './About.module.css';
import coverPhoto from './about.png';

export default function About() {
    return (
        <main>
            <PostTemplate coverPhoto={coverPhoto} title='About'>
                <h3 className={styles.subtitle}>
                    Lorem Ipsum
                </h3>
                <img src={coverPhoto} alt="Foto sobre" className={styles.aboutPhoto} />
                <p className={styles.paragraph}>
                    Cras tortor ante, imperdiet in interdum vel, convallis in risus. Curabitur vel dui eget elit cursus aliquam et sit amet nulla. Duis egestas turpis a viverra pellentesque. Donec eget augue nec mi maximus blandit. Mauris et neque dui. Nulla porta tempus nibh et ullamcorper. Suspendisse varius tortor sollicitudin augue rhoncus tincidunt. Integer vehicula sollicitudin efficitur. Ut condimentum hendrerit nisi, nec ultrices sapien tempus vel. In quis tincidunt lorem. Nam et sapien ac libero lobortis gravida quis in turpis.
                </p>
                <p className={styles.paragraph}>
                    Pellentesque consequat ipsum sed urna laoreet rhoncus. Morbi sagittis massa in est dignissim auctor. Nunc sit amet dolor lacus. Donec ullamcorper varius aliquam. Morbi blandit sem erat, sit amet efficitur sem luctus eu. Quisque sit amet nunc eros. Fusce eu sodales nisi. Ut sodales justo vitae libero rhoncus fringilla. Sed eu mi eu urna facilisis facilisis. Donec et libero ut ante sollicitudin mattis. Vivamus imperdiet nibh vel quam aliquet interdum. Pellentesque tristique, purus quis imperdiet semper, diam enim porttitor ligula, vitae rutrum elit urna luctus eros. Ut pellentesque elit non mauris congue, nec efficitur metus euismod.
                </p>
                <p className={styles.paragraph}>
                    Etiam sodales sodales lacus a lacinia. Vivamus nibh arcu, vulputate sed ipsum in, porta blandit diam. Praesent nulla turpis, vulputate vitae consequat sit amet, vehicula quis urna. Ut mattis consequat rutrum. Nam vel orci est. Aliquam porttitor maximus convallis. Ut volutpat libero ipsum, id semper nunc elementum tristique. Sed suscipit ut velit at congue. Proin malesuada dolor tincidunt ultricies consequat. Donec quis pharetra arcu.
                </p>
            </PostTemplate>
        </main>
    )
}
