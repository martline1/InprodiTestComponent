/**
 * Opens a new window
 *
 * @author Yael Mártin A. Alcalá León <yael.alcalla@gmail.com>
 * @param {String} url
 */
const openWindow = url => () => window?.open(url);

export default openWindow;
