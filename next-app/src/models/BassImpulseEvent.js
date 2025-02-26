export default class BassImpulseEvent {
  constructor(eventData) {
    this.id = eventData.id;
    this.date = eventData.date;
    this.venue = eventData.venue;
    this.links = eventData.links;
    this.titleEn = eventData.title_en;
    this.titleCs = eventData.title_cs;
    this.descriptionEn = eventData.description_en;
    this.descriptionCs = eventData.description_cs;
    this.contentEn = eventData.content_en;
    this.contentCs = eventData.content_cs;
    this.createdAt = eventData.createdAt;
    this.photos = eventData.photos;
    this.video = eventData.video;
    this.cover = eventData.cover;
    this.awsFolder = eventData.aws_folder;
  }

  getPageId(lang) {
    const title = lang === 'en' ? this.titleEn : this.titleCs;
    const pageId = `${this.id}-${title
      .replaceAll('- ', '')
      .replaceAll(' ', '-')
      .toLowerCase()}`;
    return pageId;
  }
}
