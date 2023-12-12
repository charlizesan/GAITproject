from flask import Flask, render_template, request, redirect, url_for, send_from_directory
from gtts import gTTS
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video', methods=['GET', 'POST'])
def video():
    text_to_speech_text = ""
    video_filename = request.form.get('selected_video', 'default.mp4')  # Get the selected video filename

    if request.method == 'POST':
        text_to_speech_text = request.form.get('text', '')
        selected_language = request.form.get('language', 'en')

        if text_to_speech_text:
            tts = gTTS(text=text_to_speech_text, lang=selected_language)
            tts.save('static/speech.mp3')

    return render_template('video.html', text_to_speech_text=text_to_speech_text, video_filename=video_filename)



@app.route('/speech/<filename>')
def speech(filename):
    return send_from_directory('static', filename)

if __name__ == '__main__':
    app.run(debug=True)
