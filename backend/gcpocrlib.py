import os, sys, json

# image_url = sys.argv[1]

def detect_text(path):
    """Detects text in the file."""
    from google.cloud import vision
    import io

    client = vision.ImageAnnotatorClient.from_service_account_json('googlecreds.json')

#    client = vision.ImageAnnotatorClient()

    with io.open(path, 'rb') as image_file:
        content = image_file.read()

    image = vision.Image(content=content)

    response = client.text_detection(image=image)
    texts = response.text_annotations
    words = ""
    
    print('Texts:')

    for text in texts:
        print('\n"{}"'.format(text.description))
        words = words + ' ' + text.description.strip()
        vertices = (['({},{})'.format(vertex.x, vertex.y)
                    for vertex in text.bounding_poly.vertices])

##        print('bounds: {}'.format(','.join(vertices)))
        

    if response.error.message:
        raise Exception(
            '{}\nFor more info on error messages, check: '
            'https://cloud.google.com/apis/design/errors'.format(
                response.error.message))

    words = words.replace('\n',' ')
    return words



def detect_text_uri(uri):
    """Detects text in the file on the Web.
    """
    from google.cloud import vision
    client = vision.ImageAnnotatorClient.from_service_account_json('googlecreds.json')
    # client = vision.ImageAnnotatorClient()
    image = vision.types.Image()
    image.source.image_uri = uri

    response = client.text_detection(image=image)
    texts = response.text_annotations
    # print('Texts:')
    # print (texts)

    words = ""
    for text in texts:
        # print('eee ')
        # print('\n"{}"'.format(text.description))
        words = words + ' ' + text.description.strip()
        break
        # print(text.description)

        # vertices = (['({},{})'.format(vertex.x, vertex.y)
        #             for vertex in text.bounding_poly.vertices])

        # print('bounds: {}'.format(','.join(vertices)))
    
    # print (words)
    words = words.replace('\n',' ')
    return words


# words = detect_text_uri(image_url)
# words = words.replace('\n',' ')

# print(words)

##words =  detect_text('text2.png')
##
##print (words)
