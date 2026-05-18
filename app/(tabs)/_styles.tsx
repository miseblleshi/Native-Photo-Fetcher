import { StyleSheet, Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const PHOTO_WIDTH = (SCREEN_WIDTH - 48) / 2;
export const PHOTO_HEIGHT = Math.round(PHOTO_WIDTH * 0.68);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 16,
        paddingBottom: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: '300',
        fontFamily: 'monospace',
        marginBottom: 16,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    toggleLabel: {
        fontFamily: 'monospace',
        fontSize: 13,
    },
    specialButton: {
        backgroundColor: '#6c59d3',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    specialButtonText: {
        color: 'white',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 13,
    },
    morePhotosButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    photoGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
    },
    photo: {
        width: PHOTO_WIDTH,
        height: PHOTO_HEIGHT,
        backgroundColor: '#ececec',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 1,
    },
    photoImage: {
        width: PHOTO_WIDTH,
        height: PHOTO_HEIGHT,
    },
    photoInfo: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: 8,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    photoAuthor: {
        color: 'white',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 12,
    },
    photoUrl: {
        color: 'white',
        fontFamily: 'monospace',
        fontSize: 10,
    },
    skeleton: {
        width: PHOTO_WIDTH,
        height: PHOTO_HEIGHT,
        backgroundColor: '#ececec',
    },
});

export default styles;