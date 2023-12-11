// JavaScript for handling fabric and model selection
document.addEventListener('DOMContentLoaded', () => {
    // Fabric selection
    document.querySelectorAll('.fabric-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const fabricType = this.getAttribute('data-fabric');
            console.log(`Fabric selected: ${fabricType}`);
        });
    });

    // Model selection
    const modelImages = document.querySelectorAll('.model-img');
    modelImages.forEach(img => {
        img.addEventListener('click', function () {
            modelImages.forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});
