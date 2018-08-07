import BaseSerializer from '../BaseSerializer';

import LineBasicMaterialSerializer from './LineBasicMaterialSerializer';
import LineDashedMaterialSerializer from './LineDashedMaterialSerializer';
import MeshBasicMaterialSerializer from './MeshBasicMaterialSerializer';
import MeshDepthMaterialSerializer from './MeshDepthMaterialSerializer';
import MeshDistanceMaterialSerializer from './MeshDistanceMaterialSerializer';
import MeshFaceMaterialSerializer from './MeshFaceMaterialSerializer';
import MeshLambertMaterialSerializer from './MeshLambertMaterialSerializer';
import MeshNormalMaterialSerializer from './MeshNormalMaterialSerializer';
import MeshPhongMaterialSerializer from './MeshPhongMaterialSerializer';
import MeshPhysicalMaterialSerializer from './MeshPhysicalMaterialSerializer';
import MeshStandardMaterialSerializer from './MeshStandardMaterialSerializer';
import MeshToonMaterialSerializer from './MeshToonMaterialSerializer';
import MultiMaterialSerializer from './MultiMaterialSerializer';
import ParticleBasicMaterialSerializer from './ParticleBasicMaterialSerializer';
import ParticleSystemMaterialSerializer from './ParticleSystemMaterialSerializer';
import PointCloudMaterialSerializer from './PointCloudMaterialSerializer';
import PointsMaterialSerializer from './PointsMaterialSerializer';
import RawShaderMaterialSerializer from './RawShaderMaterialSerializer';
import ShaderMaterialSerializer from './ShaderMaterialSerializer';
import ShadowMaterialSerializer from './ShadowMaterialSerializer';
import SpriteCanvasMaterialSerializer from './SpriteCanvasMaterialSerializer';
import SpriteMaterialSerializer from './SpriteMaterialSerializer';

/**
 * MaterialsSerializer
 */
function MaterialsSerializer() {
    BaseSerializer.call(this);
}

MaterialsSerializer.prototype = Object.create(BaseSerializer.prototype);
MaterialsSerializer.prototype.constructor = MaterialsSerializer;

MaterialsSerializer.prototype.toJSON = function (obj) {
    var json = null;

    if (obj instanceof THREE.LineBasicMaterial) {
        json = (new LineBasicMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.LineDashedMaterial) {
        json = (new LineDashedMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.MeshBasicMaterial) {
        json = (new MeshBasicMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.MeshDepthMaterial) {
        json = (new MeshDepthMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.MeshDistanceMaterial) {
        json = (new MeshDistanceMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.MeshFaceMaterial) {
        json = (new MeshFaceMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.MeshLambertMaterial) {
        json = (new MeshLambertMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.MeshNormalMaterial) {
        json = (new MeshNormalMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.MeshPhongMaterial) {
        json = (new MeshPhongMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.MeshPhysicalMaterial) {
        json = (new MeshPhysicalMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.MeshStandardMaterial) {
        json = (new MeshStandardMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.MeshToonMaterial) {
        json = (new MeshToonMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.MultiMaterial) {
        json = (new MultiMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.ParticleBasicMaterial) {
        json = (new ParticleBasicMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.ParticleSystemMaterial) {
        json = (new ParticleSystemMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.PointCloudMaterial) {
        json = (new PointCloudMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.PointsMaterial) {
        json = (new PointsMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.RawShaderMaterial) {
        json = (new RawShaderMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.ShaderMaterial) {
        json = (new ShaderMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.ShadowMaterial) {
        json = (new ShadowMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.SpriteCanvasMaterial) {
        json = (new SpriteCanvasMaterialSerializer()).toJSON.call(this, obj);
    } else if (obj instanceof THREE.SpriteMaterial) {
        json = (new SpriteMaterialSerializer()).toJSON.call(this, obj);
    } else {
        console.warn(`MaterialsSerializer: 不支持的材质类型${obj.type}。`);
    }

    return json;
};

MaterialsSerializer.prototype.fromJSON = function (json, parent) {

};

export default MaterialsSerializer;