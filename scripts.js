// JavaScript for handling fabric and model selection
document.addEventListener('DOMContentLoaded', () => {
    // Model selection
    const modelImages = document.querySelectorAll('.model-img');
    modelImages.forEach(img => {
        img.addEventListener('click', function () {
            modelImages.forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    // Fabric selection
    const fabricImages = document.querySelectorAll('.fabric-img');
    fabricImages.forEach(img => {
        img.addEventListener('click', function () {
            fabricImages.forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    // Dress selection
    const dressImages = document.querySelectorAll('.dress-img');
    dressImages.forEach(img => {
        img.addEventListener('click', function () {
            dressImages.forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    function generateSpeechAndPlayVideo() {
        const selectedModel = document.querySelector('.model-img.selected');
        const selectedFabric = document.querySelector('.fabric-img.selected');
        const selectedDress = document.querySelector('.dress-img.selected');
        const textArea = document.querySelector('textarea[name="text"]').value;
    
        if (selectedModel && selectedFabric && selectedDress) {
            const combinationKey = `${selectedModel.dataset.model}_${selectedFabric.dataset.model}_${selectedDress.dataset.model}`;
    
            if (videoMapping.hasOwnProperty(combinationKey)) {
                const videoFilename = videoMapping[combinationKey];
    
                // Set the value of the hidden input field
                document.getElementById('selectedVideo').value = videoFilename;
    
                // Check if text-to-speech is needed
                if (textArea.trim() !== '') {
                    // If text is entered, submit the form
                    document.querySelector('form').submit();
                } else {
                    // If no text, submit the form which will redirect to the video route
                    document.querySelector('form').submit();
                }
            } else {
                alert('Selected combination not found.');
            }
        } else {
            alert('Please select a model, fabric, and dress.');
        }
    }
    
    const generateButton = document.querySelector('generateButton');
        if (generateButton) {
            generateButton.addEventListener('click', generateSpeechAndPlayVideo);
        }
    

    const videoMapping = {
        //Model 1 options
        model1_fabric1_dress1: 'model1_fabric1_dress1.mp4',
        model1_fabric1_dress2: 'model1_fabric1_dress2.mp4',
        model1_fabric2_dress1: 'model1_fabric2_dress1.mp4',
        model1_fabric2_dress2: 'model1_fabric2_dress2.mp4',
        model1_fabric3_dress1: 'model1_fabric3_dress1.mp4',
        model1_fabric3_dress2: 'model1_fabric3_dress2.mp4',
        //Model 2 options
        model2_fabric1_dress1: 'model2_fabric1_dress1.mp4',
        model2_fabric1_dress2: 'model2_fabric1_dress2.mp4',
        model2_fabric2_dress1: 'model2_fabric2_dress1.mp4',
        model2_fabric2_dress2: 'model2_fabric2_dress2.mp4',
        model2_fabric3_dress1: 'model2_fabric3_dress1.mp4',
        model2_fabric3_dress2: 'model2_fabric3_dress2.mp4',
        //Model 3 options
        model3_fabric1_dress1: 'model3_fabric1_dress1.mp4',
        model3_fabric1_dress2: 'model3_fabric1_dress2.mp4',
        model3_fabric2_dress1: 'model3_fabric2_dress1.mp4',
        model3_fabric2_dress2: 'model3_fabric2_dress2.mp4',
        model3_fabric3_dress1: 'model3_fabric3_dress1.mp4',
        model3_fabric3_dress2: 'model3_fabric3_dress2.mp4',
    };
    
});
